const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://translate.api.cloud.yandex.net/translate/v2/translate';
const IAM_TOKEN = '';
const folder_id = '';
const target_language = 'ru';

function getTranslateWord(value, callback) {
    const texts = value;

    const body = {
        targetLanguageCode: target_language,
        texts: texts,
        folderId: folder_id,
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${IAM_TOKEN}`,
    };

    fetch(PROXY_URL + API_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.translations);
            callback(value, data.translations[0].text);
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
            callback(value, "None");
        });
}
function ff(val, tran) {
    console.log(val, tran)
}
getTranslateWord("book",)


int