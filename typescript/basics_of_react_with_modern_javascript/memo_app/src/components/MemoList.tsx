/* Libraries */
import { memo } from 'react';
/* Recoil */
import { useRecoilState } from 'recoil';
import { memosAtom } from '../recoil';
/* Components */
import { MemoListItem } from '.';

export const MemoList = memo(() => {
    const [memos] = useRecoilState(memosAtom);

    return (
        <ul>
            {memos[0] && (
                <>
                    <span className="block mb-3 font-semibold">메모 목록</span>
                    {memos.map((memo, index) => (
                        <MemoListItem key={memo.id} memo={memo} index={index} />
                    ))}
                </>
            )}
        </ul>
    );
});
