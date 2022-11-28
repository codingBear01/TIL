/* Components */
import { MemoInputSection, MemoList } from './components/';

function App() {
    return (
        <>
            <div className="text-2xl font-semibold">간단 메모</div>
            <MemoInputSection />
            <div className="p-5 border-[1px] border-solid border-slate-300">
                <MemoList />
            </div>
        </>
    );
}

export default App;
