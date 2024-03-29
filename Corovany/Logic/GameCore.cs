﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Corovany.FrontendCommands;

namespace Corovany.Logic
{
    public class GameCore
    {
        private const int MoneyOnStart = 500;
        private const int MaxActiveChars = 3;
        
        /// <summary>
        ///     Every human is treated via it's Player instance, and treats the same.
        /// </summary>
        public class Player
        {
            public string Name { get; set; }
            public string Id { get; set; }
            public int Gold { get; set; }
            public int Shards { get; set; }
            public List<CharacterCore.Character> PlayerChars { get; set; }
            public CharacterCore.Character[] CurrentChars { get; set; }

            public Player(string id, string name)
            {
                Name = name;
                Id = id;
                Gold = MoneyOnStart;
                Shards = 0;
                PlayerChars = new List<CharacterCore.Character>();
                CurrentChars = new CharacterCore.Character[MaxActiveChars];
            }
        }

        public class Enemy
        {
            public List<CharacterCore.Character> EnemyChars { get; set; }

            public Enemy()
            {
                EnemyChars = new List<CharacterCore.Character>();
            }
        }

        public class Game
        {
            /// <summary>
            ///     Game provides Player control of the game. Contains all the information about
            ///     the game. 
            /// </summary>
            public Dictionary<string, Player> Players { get; set; }
            public List<Enemy> Enemies { get; set; }
            public List<CombatCore.PlayerCombatUnit> Units { get; set; }
            public Queue<CombatCore.PlayerCombatUnit> UnitTurnQueue { get; set; }
            public int TurnCounter { get; set; } = 1;
            public int UnitCounter { get; set; }
            public Action<IFrontendCommand> ReportInfo { get; set; }
            public CombatCore.PlayerCombatUnit CurrentUnit { get; set; }
            public Dictionary<string,CombatCore.PlayerCombatUnit> AvailableTargets { get; set; }
            public Dictionary<string,CharacterCore.Perk> AvailablePerks { get; set; }

            public Game(Action<IFrontendCommand> reportInfo)
            {
                Players = new Dictionary<string, Player>();
                Enemies = new List<Enemy>();
                Units = new List<CombatCore.PlayerCombatUnit>();
                ReportInfo = reportInfo;
            }

            public void Reset()
            {
                Players = new Dictionary<string, Player>();
                Enemies = new List<Enemy>();
                Units = new List<CombatCore.PlayerCombatUnit>();
                UnitTurnQueue = null;
                TurnCounter = 1;
                UnitCounter = 0;
                CurrentUnit = null;
                AvailableTargets = null;
                AvailablePerks = null;
            }

            public CombatCore.PlayerCombatUnit GetUnitFromQueue()
            {
                var counter = 0;
                //while (counter == 0 || CurrentUnit.Character.OwnerId == null && counter < Units.Count)
                //{
                    CurrentUnit = UnitTurnQueue.Dequeue();
                    counter++;
                    // if (CurrentUnit.Character.Owner != null)
                    // {
                    //     ReportInfo($"Ход персонажа {CurrentUnit.Character.Name} игрока {CurrentUnit.Character.Owner.Name}");
                    // }
                    AvailableTargets = Units
                        .Where(unit => unit.State == CombatCore.UnitState.Fine)
                        .ToDictionary(unit => unit.Character.Name);
                    AvailablePerks = CurrentUnit.Character.CharClass.Perks
                        .ToDictionary(perk => perk.Name);
                    UnitTurnQueue.Enqueue(CurrentUnit);
                    IncreaseSpecPoints();
                //}
                return CurrentUnit.Character.OwnerId != null ? CurrentUnit : null;
            }
            
            public void FillQueueWithUnits()
            {
                UnitTurnQueue = new Queue<CombatCore.PlayerCombatUnit>();
                var temp = Units
                    .Where(unit => unit.State == CombatCore.UnitState.Fine)
                    .ToList();
                temp.Sort(new UnitComparer());
                foreach (var unit in temp)
                {
                    UnitTurnQueue.Enqueue(unit);
                }
                // ReportInfo("Очередь ходов юнитов перепросчитана");
            }

            public void IncreaseSpecPoints()
            {
                if (UnitCounter >= UnitTurnQueue.Count)
                {
                    TurnCounter++;
                    foreach (var unit in UnitTurnQueue)
                        unit.IncreaseSp(unit.Character.SpecialPoints/4);
                    UnitCounter = 0;
                }
                UnitCounter++;
            }
            
            public CombatCore.PlayerCombatUnit RandomUnitSelect()
            {
                var random = new Random();
                var num = random.Next(0, 
                    Players.FirstOrDefault().Value.CurrentChars
                        .Count(unit => unit != null));
                var character = Players.FirstOrDefault().Value.CurrentChars[num];
                var unit = Units.First(u => u.Character == character);
                return unit;
            }
        }
        
        public class UnitComparer : IComparer<CombatCore.PlayerCombatUnit>
        {
            
            public int Compare(CombatCore.PlayerCombatUnit first, CombatCore.PlayerCombatUnit second)
            {
                if (first.Initiative < second.Initiative)
                    return -1;
                if (first.Initiative > second.Initiative)
                    return 1;
                if (first.Character.OwnerId != null && second.Character.OwnerId == null)
                    return -1; 
                if (first.Character.OwnerId == null && second.Character.OwnerId != null)
                    return 1;
                return 0;
            }
        }
    }
}