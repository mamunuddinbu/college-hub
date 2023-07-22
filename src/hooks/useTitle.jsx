import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - CollegeHub`;
    },[title])
};

export default useTitle;