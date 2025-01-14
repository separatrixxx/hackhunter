import toast from 'react-hot-toast';

export const ToastSuccess = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: '🤩',
            style: {
                borderRadius: '16px',
                fontWeight: 600,
                color: 'var(--dark)',
            },
        });
    }
};

export const ToastError = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: '🙄',
            style: {
                borderRadius: '16px',
                fontWeight: 600,
                color: 'var(--error)',
            },
        });
    }
};