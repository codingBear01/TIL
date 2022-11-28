/* Libraries */
import { useRef, memo } from 'react';
/* Recoil */
import { useRecoilState } from 'recoil';
import { memosAtom } from '../recoil';

export const MemoInputSection = memo(() => {
    /* States And Refs */
    const [memos, setMemos] = useRecoilState(memosAtom);
    const memoRef = useRef<HTMLInputElement>(null);

    /* Handlers */
    const checkInput = (newMemo: string | undefined) => {
        if (!newMemo) {
            alert('메모를 입력해주세요!');
            return false;
        }
        return true;
    };

    const onclickAddMemo = () => {
        const newId = memos[0] ? memos[memos?.length - 1]?.id + 1 : 1;
        const newMemo = memoRef.current?.value.trim();

        if (!checkInput(newMemo)) return;

        const newMemos = {
            id: newId,
            memo: newMemo,
        };
        setMemos((prevMemos) => [...prevMemos, newMemos]);
    };

    return (
        <>
            <input
                ref={memoRef}
                className="my-5 border-[1px] border-solid border-slate-300 rounded"
                type="text"
                placeholder="메모를 입력하세요."
                defaultValue={memoRef.current?.value}
            />
            <button
                className="ml-3 px-3 py-1 border-[1px] border-solid border-slate-300 rounded"
                type="button"
                onClick={onclickAddMemo}
            >
                추가
            </button>
        </>
    );
});
