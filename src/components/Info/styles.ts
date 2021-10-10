import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {MotiView} from 'moti';

export const Container = styled(MotiView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height + 62}px;

    padding-left:30px;
    padding-right:30px;

    align-items: center;
`;

export const Image = styled.Image`
    position: absolute;
    z-index: 1;
`;

export const Content = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    width: 100%;
    height: 420px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    background: ${({ theme }) => theme.colors.shape};

    position: absolute;
    bottom: 0;
    padding: 30px;
`;

export const Header = styled.View`
    margin-top: 30px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${RFValue(44)}px;
    color: ${({ theme }) => theme.colors.text};

    max-width: 200px;
`;

export const Icon = styled.Image`
    height: 80px;
    width: 80px;
`;

export const About = styled.Text`
    margin-top: 35px;
    padding-bottom: 90px;

    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${RFValue(14)}px;

    text-align: justify;
`;
