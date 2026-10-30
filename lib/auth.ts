import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const SECRET_KEY = new TextEncoder().encode(
  process.env.SESSION_SECRET || 'dev-secret-change-in-production-12345'
)

const ADMIN_PIN = process.env.ADMIN_PIN || '1234'

export interface SessionPayload {
  authenticated: boolean
  exp: number
}

export async function verifyPin(pin: string): Promise<boolean> {
  return pin === ADMIN_PIN
}

export async function createSession(): Promise<string> {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  const token = await new SignJWT({ authenticated: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(SECRET_KEY)

  return token
}

export async function verifySession(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return payload.authenticated === true
  } catch {
    return false
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value

  if (!token) return null

  const isValid = await verifySession(token)
  if (!isValid) return null

  return { authenticated: true, exp: Date.now() + 24 * 60 * 60 * 1000 }
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60, // 24 hours
    path: '/',
  })
}

export async function clearSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
}

export function getAdminPin(): string {
  return ADMIN_PIN
}