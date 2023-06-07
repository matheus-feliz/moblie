/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';
import {UserProvider} from '../context/context';

export default props => {
    return (
        <>
            <NavigationContainer>
                <UserProvider>
                <Stack />
                </UserProvider>
            </NavigationContainer>
        </>
    );
};

