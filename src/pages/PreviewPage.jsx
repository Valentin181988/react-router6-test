import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Controls } from '../components/Controls';
import { Progress } from '../components/Progress';
import { Publication } from '../components/Publication';
import { useFetchItems } from '../hooks';

export const PreviewPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {items, loading} = useFetchItems();
    const currentItemPos = Number(searchParams.get('item'));

    const changeIndex = value => {
        setSearchParams({ item: currentItemPos + value});
    };

    useEffect(() => {
        if(!currentItemPos) {
            console.log('No item in url');
            setSearchParams({ item: 1});
        }
    }, [currentItemPos, setSearchParams]);

    const totalItems = items.length;
    const currentItem = items[currentItemPos - 1];
    const showPlaceholder = !loading && totalItems === 0;
    const showReaderUI = !loading && totalItems > 0;

    return (
        <div>
            {loading && <div>Loading...</div>}
            {showPlaceholder && <div>Publications is not yet!</div> }
            {showReaderUI && (
                <>
                  <Controls 
                     current={currentItemPos}
                     total={totalItems}
                     onChange={changeIndex}
                  />
                  <Progress current={currentItemPos} total={totalItems}/>
                  {currentItem && <Publication item={currentItem }/>}
                </>
            )}
        </div>
    );
};