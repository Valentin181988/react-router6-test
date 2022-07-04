export const Controls = ({current, total, onChange }) => {
    return (
        <section>
            <button 
            type="button"
            disabled={current === 1}
            onClick={() => onChange(-1)}
            >
               Back 
            </button>
            <button 
            type="button"
            disabled={current === total}
            onClick={() => onChange(1)}
            >
               Next 
            </button>
        </section>
    );
};