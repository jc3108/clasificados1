export async function checkBiometricSupport(): Promise<'fingerprint' | 'faceid' | null> {
  if (!window.PublicKeyCredential) {
    return null;
  }

  try {
    const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    if (!available) {
      return null;
    }

    // Check if it's an iOS device with FaceID
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    if (isIOS && 'FaceID' in window) {
      return 'faceid';
    }

    // For other devices, assume fingerprint if biometric is available
    return 'fingerprint';
  } catch {
    return null;
  }
}

export async function authenticateWithBiometric(): Promise<boolean> {
  try {
    const publicKey: PublicKeyCredentialCreationOptions = {
      challenge: new Uint8Array(32),
      rp: {
        name: 'Clasificados',
        id: window.location.hostname,
      },
      user: {
        id: new Uint8Array(16),
        name: 'user',
        displayName: 'Usuario',
      },
      pubKeyCredParams: [{
        type: 'public-key',
        alg: -7,
      }],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
        userVerification: 'required',
      },
      timeout: 60000,
      attestation: 'none',
    };

    await navigator.credentials.create({ publicKey });
    return true;
  } catch {
    return false;
  }
}