const styles = {
    cartTable : {
        tableContainer : {
            width: '60%',
            maxHeight: '80vh',
            margin: '30px auto',
            overflowX: 'scroll',
            overflowY: 'hidden',
            display: 'block',
            borderRadius: '8px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#1F2A44',
        },
        customTable : {
            width: '100%',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
            borderRadius: '10px',
        },
        noData : {
            textAlign: 'center',
            padding: '30px',
            color: '#9E9E9E',
            fontSize: '1.2em',
        },
    },
    removeItemButton : {
        customButton : {
            appearance: 'none',
            backgroundColor: '#E74C3C',
            border: '2px solid #C0392B',
            borderRadius: '10px',
            boxSizing: 'border-box',
            color: '#fff',
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: 'inherit',
            fontSize: '10px',
            fontWeight: 600,
            lineHeight: 'normal',
            margin: 0,
            minWidth: 0,
            outline: 'none',
            padding: '5px 10px',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
            userSelect: 'none',
            '-webkit-user-select': 'none',
            touchAction: 'manipulation',
            willChange: 'transform',
            ':hover': {
                backgroundColor: '#C0392B',
                borderColor: '#A93226',
            },
            ':active': {
                backgroundColor: '#B03A2E',
                borderColor: '#7D3C3C',
            }
        },
    },


    placeOrderButton : {
        customButton : {
            appearance: 'none',
            backgroundColor: '#2ECC71',
            border: '2px solid #27AE60',
            borderRadius: '10px',
            boxSizing: 'border-box',
            color: '#fff',
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: 'inherit',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: 'normal',
            margin: 0,
            minWidth: 0,
            outline: 'none',
            padding: '12px 24px',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
            userSelect: 'none',
            '-webkit-user-select': 'none',
            touchAction: 'manipulation',
            willChange: 'transform',
            ':hover': {
                backgroundColor: '#27AE60',
                borderColor: '#1D8348',
            },
            ':active': {
                backgroundColor: '#1E8449',
                borderColor: '#1D6A34',
            }
        },

    },

};

export default styles;