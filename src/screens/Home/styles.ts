import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image`
    left: 53px;
    top: 77px;
`;

export const Content = styled.View`
    padding: 30px;
    bottom: 0;

    position: absolute;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(36)}px;

    margin-bottom: -10px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(40)}px;
`;

export const Button = styled(RectButton)`
    width: 200px;
    height: 50px;
    border-radius: 30px;

    background: ${({ theme }) => theme.colors.button};
    
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 20px;
    align-self: center;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;

    margin-right: 20px;
`;
