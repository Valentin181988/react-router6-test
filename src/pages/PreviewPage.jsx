import { useState } from 'react';
import { Controls } from '../components/Controls';
import { Progress } from '../components/Progress';
import { Publication } from '../components/Publication';
import { useFetchItems } from '../hooks';

export const PreviewPage = () => {
    const [index, setIndex] = useState(0);
    const {items, loading} = useFetchItems();

    const changeIndex = value => {
        setIndex(prevIndex => prevIndex + value);
    };

    const totalItems = items.length;
    const currentItem = items[index];
    const showPlaceholder = !loading && totalItems === 0;
    const showReaderUI = !loading && totalItems > 0;

    return (
        <div>
            {loading && <div>Loading...</div>}
            {showPlaceholder && <div>Publications is not yet!</div> }
            {showReaderUI && (
                <>
                  <Controls 
                     current={index + 1}
                     total={totalItems}
                     onChange={changeIndex}
                  />
                  <Progress current={index + 1} total={totalItems}/>
                  {currentItem && <Publication item={currentItem }/>}
                </>
            )}
        </div>
    );
};