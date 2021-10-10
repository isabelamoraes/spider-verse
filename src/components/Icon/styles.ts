import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {MotiView} from 'moti';

export const Container = styled(MotiView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height + 62}px;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 2;
`;

export const Image = styled.Image``;