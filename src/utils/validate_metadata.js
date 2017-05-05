import * as dR from './date_related';

const validGender = (values) => ! ! values.gender;

export const validateMetadata = (values) => {
    const { DD, MM, YYYY } = values;
    const birthDate = `${DD}/${MM}/${YYYY}`;

    const errors = {};

    if (! dR.validDay(DD)) {
        errors.DD = 'Days between 1 to 31';
    }

    if (! dR.validMonth(MM)) {
        errors.MM = 'Month between 1 to 12';
    }

    if (! dR.validYear(YYYY)) {
        errors.YYYY = 'Year is not valid';
    }

    if (dR.allFieldsFilledAndValid({ DD, MM, YYYY }) && ! dR.matureEnough(birthDate)) {
        errors.YYYY = 'Be at least 18 years!';
    }

    if (dR.allIndividualBirthFieldsValid({ DD, MM, YYYY }) && ! dR.validDate({ DD, MM, YYYY })) {
        errors.DD = 'Not a valid day of the month';
    }

    if (! validGender(values)) {
        errors.gender = 'Gender not specified';
    }

    return errors;
};
