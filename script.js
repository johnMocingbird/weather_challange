// The next thing you can improve on is the breaking things down into separate functions.
// If I were to write this application now,
// I would consider using the following functions.The name of the function is the responsibility of that function.
// This concept is called single responsibility. In other words make your functions less complicated.
// Just give it one thing to do

const testObject = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1702803600,
      main: {
        temp: 283.24,
        feels_like: 282.13,
        temp_min: 283.24,
        temp_max: 284.53,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 70,
        temp_kf: -1.29,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.69,
        deg: 350,
        gust: 7.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-17 09:00:00",
    },
    {
      dt: 1702814400,
      main: {
        temp: 283.23,
        feels_like: 281.99,
        temp_min: 283.23,
        temp_max: 283.54,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1019,
        humidity: 65,
        temp_kf: -0.31,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.76,
        deg: 344,
        gust: 4.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-17 12:00:00",
    },
    {
      dt: 1702825200,
      main: {
        temp: 284.89,
        feels_like: 283.4,
        temp_min: 284.89,
        temp_max: 284.89,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1019,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 1.87,
        deg: 5,
        gust: 3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-17 15:00:00",
    },
    {
      dt: 1702836000,
      main: {
        temp: 289.95,
        feels_like: 288.44,
        temp_min: 289.95,
        temp_max: 289.95,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1018,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 1.74,
        deg: 300,
        gust: 2.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-17 18:00:00",
    },
    {
      dt: 1702846800,
      main: {
        temp: 292.42,
        feels_like: 291,
        temp_min: 292.42,
        temp_max: 292.42,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 23,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 1.76,
        deg: 280,
        gust: 2.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-17 21:00:00",
    },
    {
      dt: 1702857600,
      main: {
        temp: 290.19,
        feels_like: 288.73,
        temp_min: 290.19,
        temp_max: 290.19,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.2,
        deg: 262,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-18 00:00:00",
    },
    {
      dt: 1702868400,
      main: {
        temp: 288.55,
        feels_like: 287.06,
        temp_min: 288.55,
        temp_max: 288.55,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.32,
        deg: 272,
        gust: 1.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-18 03:00:00",
    },
    {
      dt: 1702879200,
      main: {
        temp: 287.3,
        feels_like: 285.76,
        temp_min: 287.3,
        temp_max: 287.3,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.91,
        deg: 244,
        gust: 2.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-18 06:00:00",
    },
    {
      dt: 1702890000,
      main: {
        temp: 286.16,
        feels_like: 284.56,
        temp_min: 286.16,
        temp_max: 286.16,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.81,
        deg: 287,
        gust: 2.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-18 09:00:00",
    },
    {
      dt: 1702900800,
      main: {
        temp: 285.46,
        feels_like: 283.87,
        temp_min: 285.46,
        temp_max: 285.46,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.64,
        deg: 305,
        gust: 2.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-18 12:00:00",
    },
    {
      dt: 1702911600,
      main: {
        temp: 287.23,
        feels_like: 285.71,
        temp_min: 287.23,
        temp_max: 287.23,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1020,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.68,
        deg: 344,
        gust: 2.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-18 15:00:00",
    },
    {
      dt: 1702922400,
      main: {
        temp: 292.23,
        feels_like: 290.95,
        temp_min: 292.23,
        temp_max: 292.23,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.76,
        deg: 2,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-18 18:00:00",
    },
    {
      dt: 1702933200,
      main: {
        temp: 294.38,
        feels_like: 293.21,
        temp_min: 294.38,
        temp_max: 294.38,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1018,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.77,
        deg: 353,
        gust: 2.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-18 21:00:00",
    },
    {
      dt: 1702944000,
      main: {
        temp: 291.55,
        feels_like: 290.39,
        temp_min: 291.55,
        temp_max: 291.55,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 2.18,
        deg: 29,
        gust: 4.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-19 00:00:00",
    },
    {
      dt: 1702954800,
      main: {
        temp: 289.36,
        feels_like: 288.21,
        temp_min: 289.36,
        temp_max: 289.36,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1021,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 2.15,
        deg: 39,
        gust: 5.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-19 03:00:00",
    },
    {
      dt: 1702965600,
      main: {
        temp: 287.22,
        feels_like: 286.14,
        temp_min: 287.22,
        temp_max: 287.22,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 3.04,
        deg: 60,
        gust: 7.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-19 06:00:00",
    },
    {
      dt: 1702976400,
      main: {
        temp: 286.24,
        feels_like: 285.12,
        temp_min: 286.24,
        temp_max: 286.24,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.53,
        deg: 73,
        gust: 5.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-19 09:00:00",
    },
    {
      dt: 1702987200,
      main: {
        temp: 285.26,
        feels_like: 284.15,
        temp_min: 285.26,
        temp_max: 285.26,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.4,
        deg: 84,
        gust: 8.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-19 12:00:00",
    },
    {
      dt: 1702998000,
      main: {
        temp: 285.87,
        feels_like: 284.66,
        temp_min: 285.87,
        temp_max: 285.87,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.33,
        deg: 94,
        gust: 8.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-19 15:00:00",
    },
    {
      dt: 1703008800,
      main: {
        temp: 289.42,
        feels_like: 288.38,
        temp_min: 289.42,
        temp_max: 289.42,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.89,
        deg: 114,
        gust: 6.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-19 18:00:00",
    },
    {
      dt: 1703019600,
      main: {
        temp: 289.79,
        feels_like: 288.89,
        temp_min: 289.79,
        temp_max: 289.79,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.99,
        deg: 121,
        gust: 6.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-19 21:00:00",
    },
    {
      dt: 1703030400,
      main: {
        temp: 288.01,
        feels_like: 287.14,
        temp_min: 288.01,
        temp_max: 288.01,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.36,
        deg: 105,
        gust: 8.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-20 00:00:00",
    },
    {
      dt: 1703041200,
      main: {
        temp: 287.23,
        feels_like: 286.42,
        temp_min: 287.23,
        temp_max: 287.23,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.32,
        deg: 103,
        gust: 10.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-20 03:00:00",
    },
    {
      dt: 1703052000,
      main: {
        temp: 287.27,
        feels_like: 286.7,
        temp_min: 287.27,
        temp_max: 287.27,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.94,
        deg: 102,
        gust: 10.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-20 06:00:00",
    },
    {
      dt: 1703062800,
      main: {
        temp: 287.51,
        feels_like: 287.09,
        temp_min: 287.51,
        temp_max: 287.51,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.84,
        deg: 95,
        gust: 11.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-20 09:00:00",
    },
    {
      dt: 1703073600,
      main: {
        temp: 287.09,
        feels_like: 286.76,
        temp_min: 287.09,
        temp_max: 287.09,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 3.8,
        deg: 86,
        gust: 11.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-20 12:00:00",
    },
    {
      dt: 1703084400,
      main: {
        temp: 288.8,
        feels_like: 288.48,
        temp_min: 288.8,
        temp_max: 288.8,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 4.17,
        deg: 97,
        gust: 11.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-20 15:00:00",
    },
    {
      dt: 1703095200,
      main: {
        temp: 291.95,
        feels_like: 291.66,
        temp_min: 291.95,
        temp_max: 291.95,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 5.44,
        deg: 118,
        gust: 9.38,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-20 18:00:00",
    },
    {
      dt: 1703106000,
      main: {
        temp: 292.4,
        feels_like: 292.13,
        temp_min: 292.4,
        temp_max: 292.4,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 5.65,
        deg: 119,
        gust: 9.27,
      },
      visibility: 10000,
      pop: 0.27,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-20 21:00:00",
    },
    {
      dt: 1703116800,
      main: {
        temp: 290.72,
        feels_like: 290.49,
        temp_min: 290.72,
        temp_max: 290.72,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 4.7,
        deg: 111,
        gust: 10.71,
      },
      visibility: 10000,
      pop: 0.25,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-21 00:00:00",
    },
    {
      dt: 1703127600,
      main: {
        temp: 289.78,
        feels_like: 289.61,
        temp_min: 289.78,
        temp_max: 289.78,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 4.78,
        deg: 111,
        gust: 11.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-21 03:00:00",
    },
    {
      dt: 1703138400,
      main: {
        temp: 289.76,
        feels_like: 289.59,
        temp_min: 289.76,
        temp_max: 289.76,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.82,
        deg: 107,
        gust: 10.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-21 06:00:00",
    },
    {
      dt: 1703149200,
      main: {
        temp: 289.89,
        feels_like: 289.71,
        temp_min: 289.89,
        temp_max: 289.89,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.94,
        deg: 107,
        gust: 10.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-21 09:00:00",
    },
    {
      dt: 1703160000,
      main: {
        temp: 289.48,
        feels_like: 289.34,
        temp_min: 289.48,
        temp_max: 289.48,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.8,
        deg: 104,
        gust: 10.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-21 12:00:00",
    },
    {
      dt: 1703170800,
      main: {
        temp: 290.19,
        feels_like: 290.04,
        temp_min: 290.19,
        temp_max: 290.19,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.27,
        deg: 99,
        gust: 9.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-21 15:00:00",
    },
    {
      dt: 1703181600,
      main: {
        temp: 292.18,
        feels_like: 291.97,
        temp_min: 292.18,
        temp_max: 292.18,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.86,
        deg: 117,
        gust: 8.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-21 18:00:00",
    },
    {
      dt: 1703192400,
      main: {
        temp: 293.24,
        feels_like: 293.03,
        temp_min: 293.24,
        temp_max: 293.24,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.5,
        deg: 125,
        gust: 7.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-12-21 21:00:00",
    },
    {
      dt: 1703203200,
      main: {
        temp: 291.12,
        feels_like: 290.96,
        temp_min: 291.12,
        temp_max: 291.12,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.79,
        deg: 119,
        gust: 9.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-22 00:00:00",
    },
    {
      dt: 1703214000,
      main: {
        temp: 290.08,
        feels_like: 290.05,
        temp_min: 290.08,
        temp_max: 290.08,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.12,
        deg: 111,
        gust: 9.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-22 03:00:00",
    },
    {
      dt: 1703224800,
      main: {
        temp: 289.64,
        feels_like: 289.72,
        temp_min: 289.64,
        temp_max: 289.64,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.18,
        deg: 110,
        gust: 10.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-12-22 06:00:00",
    },
  ],
  city: {
    id: 4699066,
    name: "Houston",
    coord: {
      lat: 29.7633,
      lon: -95.3633,
    },
    country: "US",
    population: 2099451,
    timezone: -21600,
    sunrise: 1702818625,
    sunset: 1702855478,
  },
};

praseData(testObject);

// I commented this function beacause I dont want to use up all my api queires. Instead I copied a test object from insomnia..
//
//fetchAPIData(
//  "https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=569b83e02c16eca2296eee261eebaa02",
//);
// function fetchAPIData(endPointUrl) {
// fetch(endPointUrl)
// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
// praseData(data);
// });
// }
// The purpose of this function is to JUST get the data. (That does inlcude.. do the fetch, use .json, handle error and return data)

function praseData(data) {
  // Maybe this functions responsibility will be to just take the data that you need. Then later it will be easier to work with.
  // One way to think about this, is to just take the data you need.. If we take the curren way that you have(not using the second api). We will need the city name, the weather for today and the five day forcast
  // Maybe we need more that that, but I think this will cover everything.
  const parsedData = {};
  parsedData.cityName = data.city.name;
  parsedData.weatherToday = data.list[0];
  parsedData.fiveDay = getParsedFiveDay(data); // I created a function called getParsedFiveDay because having that code here complicates the single responsibility of this function

  // console.log(parsedData);
  //=====================================================================================================================

  // Another way to think about it, is to remove what you dont want. Here we are modifying the orignal object, instead of creating a new one.
  // (This is one way to run methods on object, consider looking up how to check which keys exist in an object. The syntax is different)
  //
  // Why not just git rid of the keys we don't need..? play around with what the delete method does
  //delete data.city;
  //delete data.list;
  delete data.cod;
  delete data.message;
  delete data.cnt;
  //  console.log(data);
}

function getParsedFiveDay(data) {
  const listArray = data.list;
  const fiveDayArray = [];
  // TODO Ask your self, what do I want to do?
  // Your answer should be something like.get the weather forecast for only five days.
  // How can you go through the list key (array) to only pull the data for once a day?
  // What abouyt the for loop can you change to get specifc indexs of the array (not all like with i++)

  for (let i = 0; i < listArray.length; i++) {
    //console.log(listArray[i].dt_txt);
    // after you found how to take only the items you need how do you add it to your fiveDayArray?
    // remeber to add it to the end of the array beacuase we will want it to be in the correct order..
  }

  return fiveDayArray;
}

function createTodayCard(data) {}
function createFiveCards(data) {}
