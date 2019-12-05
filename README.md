# Cliente-Nodo

Cliente sencillo usando JS y ajax para consumir el servicio de NodoRestApi de manera LOCAL.

Cuenta con 3 acciones:

- Añadir nodo: Para añadir la URI del nodo del cual espera consumir para obtener la suma de sus números internos.
- Añadir número: Agrega de forma local numeros para sumarlos y almacenarlos.
- Pedir total: Solicita a los nodos conectados la totalidad de su suma interna para sumarlos junto con la suma local y regresar el resultado total.

Se debe tener el pluguin para Chrome Moesif Orign & CORS Changer para no ser bloqueado por cross-domain debido a la seguridad; sin éste pluguin no se podrá consumir correctamente el servicio.
