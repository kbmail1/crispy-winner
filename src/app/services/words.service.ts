import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export default class WordsService {

    maxWordLength = 6
    untried: string[] = []
    done: string[] = []
    // failed: string[] = []
    // succeeded: string[] = []

    init() {
        this.words.reverse()
    }
    tryNext() {
        let ind = Math.floor(Math.random() * this.words.length)
        let arr = this.words.splice(ind, 1)
        this.done.push(arr[0])
    }

    words = [
        'create',
        'creasy',
        'crease',
        'creant',
        'creamy',
        'creams',
        'creaky',
        'creaks',
        'creagh',
        'creach',
        'crazes',
        'crazed',
        'crayon',
        'crayer',
        'crawly',
        'crawls',
        'craves',
        'craver',
        'craven',
        'craved',
        'cravat',
        'craton',
        'crates',
        'crater',
        'crated',
        'cratch',
        'crasis',
        'crases',
        'crapwa',
        'crappy',
        'crappo',
        'crapon',
        'crapes',
        'craped',
        'crants',
        'cranny',
        'cranky',
        'cranks',
        'cranic',
        'crania',
        'craney',
        'cranet',
        'cranes',
        'craner',
        'craned',
        'cranch',
        'crance',
        'crampy',
        'cramps',
        'cramel',
        'crambo',
        'crambe',
        'crakow',
        'crakes',
        'craker',
        'craked',
        'craggy',
        'crafty',
        'crafts',
        'cradle',
        'cradge',
        'craddy',
        'cracky',
        'cracks',
        'cracca',
        'crabut',
        'crabit',
        'craber',
        'crabby',
        'craals',
        'cozzes',
        'cozing',
        'cozily',
        'cozies',
        'cozier',
        'cozeys',
        'cozens',
        'coyure',
        'coypus',
        'coypou',
        'coyote',
        'coynye',
        'coyish',
        'coying',
        'coyest',
        'coydog',
        'coxite',
        'coxing',
        'coxier',
        'cowson',
        'cowrie',
        'cowpox',
        'cowper',
        'cowpen',
        'cowpea',
        'cowpat',
        'cowmen',
        'cowman',
        'cowled',
        'cowish',
        'cowing',
        'cowier',
        'cowers',
        'coween',
        'cowdie',
        'cowboy',
        'coward',
        'cowage',
        'covite',
        'coving',
        'covine',
        'covido',
        'coveys',
        'covets',
        'covert',
        'covers',
        'covent',
        'covens',
        'covary',
        'covado',
        'couxio',
        'couxia',
        'coutil',
        'couthy',
        'couths',
        'couthe',
        'coutet',
        'couter',
        'coutel',
        'cousin',
        'ourty',
        'ourts',
        'oursy',
        'ourse',
        'ouril',
        'ourie',
        'ourge',
        'ourbe',
        'ourap',
        'oupon',
        'ouple',
        'oupes',
        'ouper',
        'upee',
        'ouped',
        'ounty',
        'ounts',
        'oulis',
        'oulie',
        'oulee',
        'ouldn',
        'oughs',
        'ougar',
        'oudee',
        'ouchy',
        'ouche',
        'oucal',
        'otype',
        'otyle',
        'otyla',
        'otwin',
        'otwal',
        'otula',
        'otuit',
        'ottus',
        'otton',
        'ottid',
        'otter',
        'otted',
        'ottas',
        'ottar',
        'ottae',
        'tset',
        'toxo',
        'toro',
        'toin',
        'tman',
        'tise',
        'ting',
        'tice',
        'thon',
        'tham',
        'tery',
        'tele',
        'teen',
        'teau',
        'tans',
        'stly',
        'ster',
        'sted',
        'star',
        'stal',
        'stae',
        'ssie',
        'ssid',
        'ssic',
        'sset',
        'ssas',
    ]
}