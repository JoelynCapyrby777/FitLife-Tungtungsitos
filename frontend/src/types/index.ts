/**
 * Definición de los tipos de alertas o notificaciones "Toast" utilizables en la aplicación.
 */

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface User {
  id: number;
  nombre: string;
  edad: number;
  correo: string;
  pesoKg: string;
  estaturaMetros: string;
}
