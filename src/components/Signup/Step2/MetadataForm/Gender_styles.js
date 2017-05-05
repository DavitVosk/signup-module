const borderStyles = {
    borderWidth: 1, borderColor: 'grey', borderStyle: 'solid',
};

export default {
    selectedStyles: {
        backgroundColor: '#4A90E2', color: 'white', ...borderStyles
    },
    unselectedStyles: {
        backgroundColor: 'white', color: 'black', ...borderStyles
    }
};
