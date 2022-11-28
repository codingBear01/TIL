/* Libraries */
import { v1 } from 'uuid';
/* recoil */
import { atom } from 'recoil';
/* Interfaces */
import { MemosTypes } from '../interfaces';

export const memosAtom = atom<MemosTypes[]>({
    key: `memosAtom/${v1()}`,
    default: [],
});
