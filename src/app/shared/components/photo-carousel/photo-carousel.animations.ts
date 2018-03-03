import { trigger, transition, state, style, animate } from '@angular/animations';

export const slidingEffects = [
  trigger('slide', [
    transition('void => *', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(500px) translateY(200px)'
      })),
      animate('10s ease-out')
    ])
  ])
];
