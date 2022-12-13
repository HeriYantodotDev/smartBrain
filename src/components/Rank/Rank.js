import React from "react";

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="text-light center">
                {`${name}, your entries number is ...`}
            </div>
            <div className="text-light fs-1 center">
                {`${entries}`}
            </div>
        </div>
    )
}

export default Rank
