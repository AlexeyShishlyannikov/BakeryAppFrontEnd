import { trigger, transition, style, state, animate } from '@angular/animations';

export let slideLeftTop = trigger('slideLeftTop', [
  transition('void => *', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(500px) translateY(200px)'
    })),
    animate('10s ease-out')
  ])
]);
export let slideRightTop = trigger('slideRightTop', [
  transition('void => *', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(-500px) translateY(200px)'
    })),
    animate('10s ease-out')
  ])
]);
export let slideLeft = trigger('slideLeft', [
  transition('void => *', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(500px)'
    })),
    animate('10s ease-out')
  ])
]);
export let slideRight = trigger('slideRight', [
  transition('void => *', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(-500px)'
    })),
    animate('10s ease-out')
  ])
]);
