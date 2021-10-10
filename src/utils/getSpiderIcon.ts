import PeterIconPNG from '../assets/peterIcon.png';
import GwenIconPNG from '../assets/gwenIcon.png';
import MilesIconPNG from '../assets/milesIcon.png';

export function getIcon(type: string) {
    switch (type) {
        case 'peter':
            return PeterIconPNG;
        case 'gwen':
            return GwenIconPNG;
        case 'miles':
            return MilesIconPNG;
        default:
            return PeterIconPNG;
    }
}