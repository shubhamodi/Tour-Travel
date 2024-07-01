import React, { useState } from 'react'

const ScrapingQueue = () => {
    const [onGoingJobs,setOnGoingJobs]=useState(0);
    useEffect(()=>{{
        const data=await apiClient.get(ADMIN_API_ROUTES.SCRAPING_QUEUE)
    }},[onGoingJobs])
  return (
    <div>ScrapingQueue</div>
  )
}

export default ScrapingQueue;