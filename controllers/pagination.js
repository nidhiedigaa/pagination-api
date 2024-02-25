function paginationResult(model)
{
    //model is a datatbase connection which you can use to fetch the data and then continue with the following code
    //but here i have used raw data as model
    return(req,res,next)=>
    {
        const{limit,page}=req.query
       
        if(limit && page)
        {
            const startingIndex=(page-1)*limit
            const endingIndex=page*limit
            const result={}
            if(startingIndex>0)
            {
                result.previous={
                    page:parseInt(page)-1,
                    limit:parseInt(limit)
                }
            }
            if(endingIndex<model.length)
            {
                result.next={
                    next:parseInt(page)+1,
                    limit:parseInt(limit)
                }
            }
            const resultData=model.slice(startingIndex,endingIndex)
            result.resultData=resultData
            req.pagination=result
            return next()
        }
        else if(limit)
        {
            return res.status(200).json(model.slice(0,parseInt(limit)))
        }
        else
        {
            return res.status(200).json(model)
        }
    }
}

module.exports=paginationResult