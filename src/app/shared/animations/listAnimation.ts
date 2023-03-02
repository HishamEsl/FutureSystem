import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listItemAnimation = trigger('listItemAnimation', [
  state('in', style({ opacity: 1 })),

  transition('void => *', [
    style({ transform: 'translateY(0)', opacity: 0 }),
    animate('1000ms ease-in'),
  ]),
  transition('* => void', [
    animate(
      '300ms ease-out',
      style({ transform: 'scaleY(0) translateY(200px)' })
    ),
  ]),
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms {{delay}}ms ease-in', style({ opacity: 1 })),
  ]),
]);
