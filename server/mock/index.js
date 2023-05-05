const appData = {
    appQuote: 'Find the best music for your code',
    homeScreen: {
        commercial: {
            label: 'Commercial',
            id: '#commercial',
            isActive: false,
            items: [
                {
                    label: 'POP',
                    key: 'pop',
                    backgroundImage:"url(E:\Web Development Projects\Vibify\Images\m1.jpg)"
                },
                {
                    label: 'Urban',
                    key: 'urban',
                    bgImage: ''
                },
                {
                    label: 'World',
                    key: 'world',
                    bgImage: ''
                },
                {
                    label: 'Others',
                    key: 'others',
                    bgImage: ''
                },
                {
                    label: 'Cloud Rap',
                    bgImage: ''
                },
                {
                    label: 'Groove',
                    key: 'groove',
                    bgImage: ''
                },
                {
                    label: 'Electronica',
                    key: 'electronica',
                    bgImage: ''
                }
            ]
        },
        freelicense: {
            label: 'Free License',
            id: '#free-license',
            isActive: true,
            items: [
                {
                    label: 'Chill',
                    key: 'chill',
                    bgImage: ''
                },
                {
                    label: 'Positive Energy',
                    key: 'positive',
                    bgImage: ''
                },
                {
                    label: 'Feel Good',
                    bgImage: '',
                    key: 'feelgood'
                },
                {
                    label: 'Nostalgic',
                    key: 'nostalgic',
                    bgImage: ''
                }
            ]
        }
    }
}

module.exports = {
    appData
}