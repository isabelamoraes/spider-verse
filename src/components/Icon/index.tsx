import React from 'react';

import { getIcon } from '../../utils/getSpiderIcon';

import {
    Container,
    Image
} from './styles';

interface Props {
    name: string;
    state: any;
}

export function Icon({ name, state }: Props) {
    return (
        <Container
            state={state}
        >
            <Image
                source={getIcon(name)}
                width={192}
                height={200}
            />
        </Container>
    );
}