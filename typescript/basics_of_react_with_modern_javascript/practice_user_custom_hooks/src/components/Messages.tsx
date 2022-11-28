/* Libraries */
import { useContext, memo } from 'react';
/* Context */
import { IsLoadingContext } from '../providers';

const Messages = memo(() => {
    console.log('Messages rendering!');

    /* Context */
    const { isLoading } = useContext(IsLoadingContext);

    return <>{isLoading && <span className="text-red-600">로딩 중...</span>}</>;
});

export default Messages;
