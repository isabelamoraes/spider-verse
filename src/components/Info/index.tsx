import React from 'react';

import { getImage } from '../../utils/getSpiderImage';
import { getIcon } from '../../utils/getSpiderIcon';

import {
    Container,
    Image,
    Content,
    Header,
    Title,
    Icon,
    About
} from './styles';

interface Props {
    name: string;
    about: string;
    type: string;
    state: any;
}

export function Info({
    name,
    about,
    type,
    state
}: Props) {
    return (
        <Container
            state={state}
        >
            <Image
                source={getImage(type)}
            />

            <Content>
                <Header>
                    <Title>
                        {name}
                    </Title>

                    <Icon
                        source={getIcon(type)}
                    />
                </Header>

                <About>
                    {about}
                </About>
            </Content>
        </Container>
    );
}