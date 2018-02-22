import { trigger, transition, group, query, animateChild, stagger, state, style, animate } from '@angular/animations';
import { slideLeft } from '../../../animations/animations';

export let animations = [
  trigger('animateAll', [
    transition('void => *', [
      group([
        query('@slideLeft',
          stagger(300, animateChild()))
      ])
    ])
  ]),
  trigger('slideLeft', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(500px)'
    })),
    state('*', style({
      opacity: 1,
      transform: 'translateX(0px)'
    })),
    transition('void => *', [
      animate('1s ease-out')
    ]),
    transition('* => void', [
      animate('1s ease-in', style({
        opacity: 0,
        transform: 'translateX(-1000px)'
      }))
    ])
  ])
];
