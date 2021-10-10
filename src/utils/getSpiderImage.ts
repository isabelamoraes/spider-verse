import PeterPNG from '../assets/peter.png';
import GwenPNG from '../assets/gwen.png';
import MilesPNG from '../assets/miles.png';

export function getImage(type: string) {
    switch (type) {
        case 'peter':
            return PeterPNG;
        case 'gwen':
            return GwenPNG;
        case 'miles':
            return MilesPNG;
        default:
            return PeterPNG;
    }
}