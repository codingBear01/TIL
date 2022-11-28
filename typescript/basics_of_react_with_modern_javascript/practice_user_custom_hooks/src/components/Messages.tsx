/* Libraries */
import { useContext } from 'react';
/* Context */
import { IsLoadingContext } from '../providers';

function Messages() {
    /* Context */
    const { isLoading } = useContext(IsLoadingContext);

    return <>{isLoading && <span className="text-red-600">로딩 중...</span>}</>;
}

export default Messages;
