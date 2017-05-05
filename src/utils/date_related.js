import moment from 'moment';

export const toTimeStamp = ({ DD, MM, YYYY }) => moment(`${YYYY}-${MM}-${DD}`).unix();

export const validDay = (DD) => moment(DD, 'D', true).isValid();
export const validMonth = (MM) => moment(MM, 'M', true).isValid();
export const validYear = (YYYY) => {
    if (! YYYY || YYYY.length !== 4) {
        return false;
    }

    return moment(YYYY, 'Y', true).isValid();
}

export const allIndividualBirthFieldsValid = ({ DD, MM, YYYY }) => {
    return validDay(DD) && validMonth(MM) && validYear(YYYY);
};

export const validDate = ({ DD, MM, YYYY }) => {
    const date = `${DD}/${MM}/${YYYY}`;
    return moment(date, 'DD/MM/YYYY', true).isValid()
}

export const allFieldsFilledAndValid = ({ DD, MM, YYYY }) => allIndividualBirthFieldsValid({ DD, MM, YYYY }) &&
validYear({ DD, MM, YYYY });

export const getAge = (date) => Math.floor(moment(new Date())
    .diff(moment(date, 'DD/MM/YYYY'), 'years', true));

export const matureEnough = (date) => getAge(date) >= 18;
