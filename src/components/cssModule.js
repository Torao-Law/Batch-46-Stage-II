import cssModule from "./styling.module.css"

function CssModule() {
    return (
        <div className={cssModule.formGroup}>
            <label className={cssModule.formLabel}>Name</label>
            <input className={cssModule.formInput}/>
        </div>
    )
}

export default CssModule