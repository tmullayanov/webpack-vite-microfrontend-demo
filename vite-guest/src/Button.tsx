import { useCallback, useState } from "react"

const useButtonDisabilityState = (init: boolean) => {
    const [disabled, setDisabledState] = useState(init);

    const reset = () => {
        setDisabledState(disabled => !disabled);
    }

    return [disabled, reset] as const;
}

const Button = () => {
    const [disabled, reset] = useButtonDisabilityState(false);

    const onClick = useCallback(() => {
        reset();
        setTimeout(reset, 1000);
    }, [reset]);

    return (<button disabled={disabled} onClick={onClick}>
        Click me
    </button>);
}

export default Button;