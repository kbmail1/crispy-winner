import { Component, OnInit } from '@angular/core';

export const WordInfo = {
  definitions: [
    "be or remain in a particular position or state.",
    "(of a parliament, committee, court of law, etc.) be engaged in its business.",
    "take (an examination).",
    "live in someone's house while they are away and look after their pet or pets.",
    "the way in which an item of clothing fits someone.",
  ],
  synonyms: [
    "take a seat",
    "seat oneself",
    "settle down",
    "be seated",
    "take a chair",
    "perch",
    "install oneself",
    "ensconce oneself",
    "plant oneself",
    "plump oneself",
    "flop",
    "collapse",
    "sink down",
    "flump",
    "park oneself",
    "plonk oneself",
    "take a pew",
    "meet",
    "assemble",
    "convene",
    "be in session"
  ],
  antonyms: [
    "stand",
    "rise"
  ],
  examples: [
    "I sat next to him at dinner",
    "the fridge was sitting in a pool of water",
    "Parliament continued sitting until March 16",
    "pupils are required to sit nine subjects at GCSE",
    "Kelly had been cat-sitting for me",
    "the sit of her frock",
  ]
}

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {

  wordInfo: any = {}
  constructor() { }

  ngOnInit() {
    this.wordInfo = WordInfo
  }

  // pipes to display only synonyms or ....
}
