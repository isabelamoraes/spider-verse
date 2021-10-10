import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Image,
    Content,
    Text,
    Title,
    Button,
    TextButton
} from './styles';

import SpiderVersePNG from '../../assets/spider-verse.png';

export function Home({navigation}: any) {
    const theme = useTheme();

    function handleListSpider(){
        navigation.navigate('ListSpider');
    }

    return (
        <Container>
            <Image
                source={SpiderVersePNG}
                width={440}
                height={440}
            />

            <Content>
                <Text>
                    Welcome to
                </Text>

                <Title>
                    SPIDER-VERSE
                </Title>

                <Button
                    onPress={handleListSpider}
                >
                    <TextButton>
                        Explore
                    </TextButton>

                    <MaterialIcons
                        name="arrow-right-alt"
                        size={24}
                        color={theme.colors.shape}
                    />
                </Button>
            </Content>
        </Container>
    );
}