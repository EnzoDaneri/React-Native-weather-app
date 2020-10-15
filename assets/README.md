Fuente:
https://www.youtube.com/watch?v=NgDaPmxewcg&t=3438s

# expo init nameProject

# npm start

# expo install expo-location

# import \* as Location from 'expo-location';

# expo install @react-native-community/picker

# npm install --save-dev react-native-dotenv@0.2.0

1:58:00
(para crear archivo .env y guardar variable de entorno para API_KEY. Luego incluir ese archivo en el .gitIgnore)
También en archivo babel.config agregar:
'module:react-native-dotenv'

Quedaría: presets: ["babel-preset-expo", "module:react-native-dotenv"]

Reiniciar el server!
Luego en el archivo donde lo quiero usar lo importo:

import {WEATHER_API_KEY} from 'react-native-dotenv';

(en los comentarios del video también se menciona un paquete alternativo:
https://github.com/tusbar/babel-plugin-dotenv-import.
) En esos comentarios se aclara que hubo un issue con el paquete y por eso se especifica la versión a utilizar (npm install --save-dev react-native-dotenv@0.2.0)y se da este como alternativa.
A mi me funcinó bien con esa versión y no tuve que usar otro paquete.
