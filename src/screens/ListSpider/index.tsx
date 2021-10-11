import React, { useState, useEffect } from 'react';
import { FlatList, Pressable } from 'react-native';
import { useAnimationState } from 'moti';

import { Icon } from '../../components/Icon';
import { Info } from '../../components/Info';

import {
    Container
} from './styles';

interface SpiderProps {
    id: number;
    name: string;
    about: string;
    type: string;
}

export function ListSpider() {
    const [touch, setTouch] = useState(false);

    const dataSpiders: SpiderProps[] = [
        {
            id: 1,
            name: "Peter Parker",
            about: "Alright, folks, let's go over this one last time. My name is Peter Benjamin Parker. I was bitten by a radioactive spider. And for the last twenty-two years, I thought I was the one and only Spider-Man. I’m pretty sure you know the rest. You see, I saved the city, fell in love, I got married, saved the city some more, maybe too much, my marriage got testy, made some dicey money choices, don’t invest in a Spider-themed restaurant. Then like fifteen years passed, blah, blah, blah, super boring, I broke my back, a drone flew into my face, I buried Aunt May, my wife and I split up. But I handled it like a champion. ‘Cause you know what? No matter how many times I get hit, I always get back up.",
            type: "peter"
        },
        {
            id: 2,
            name: "Gwen Stacy",
            about: "Alright, people. Let’s start at the beginning one last time. My name is Gwen Stacy. I was bitten by a radioactive spider. And for the last two years, I've been the one and only Spider-Gwen. You guys know the rest. I joined a band. Saved my dad. I couldn’t save my best friend, Peter Parker. So now I save everyone else. And I don’t do friends anymore. Just to avoid any distractions.",
            type: "gwen"
        },
        {
            id: 3,
            name: "Miles Morales",
            about: "My name is Miles Morales. I was bitten by a radioactive spider and for like two days, I've been the one and only Spider-Man. I never thought I'd be able to do any of this stuff, but I can. Anyone can wear the mask. You can wear the mask. If you didn't know that before, I hope you do now. ",
            type: "miles"
        }
    ];

    const imageAnimationState = useAnimationState({
        in: {
            scale: 0,
            opacity: 0
        },
        out: {
            scale: 1,
            opacity: 1
        },
    });

    const iconAnimationState = useAnimationState({
        in: {
            scale: 0,
            opacity: 0
        },
        out: {
            scale: 1,
            opacity: 1
        },
    });

    function handlePress() {
        if (touch) {
            iconAnimationState.transitionTo('out');
            imageAnimationState.transitionTo('in');
        } else {
            iconAnimationState.transitionTo('in');
            imageAnimationState.transitionTo('out');
        }
        setTouch(!touch)
    }

    useEffect(() => {
        iconAnimationState.transitionTo('out');
        imageAnimationState.transitionTo('in');
    }, [])

    return (
        <Container>
            <FlatList
                horizontal
                pagingEnabled
                data={dataSpiders}
                keyExtractor={dataSpiders => dataSpiders.id.toString()}
                decelerationRate={0}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={handlePress}
                    >
                        <Icon
                            name={item.type}
                            state={iconAnimationState}
                        />

                        <Info
                            name={item.name}
                            about={item.about}
                            type={item.type}
                            state={imageAnimationState}
                        />
                    </Pressable>
                )
                }
            />
        </Container>
    );
}