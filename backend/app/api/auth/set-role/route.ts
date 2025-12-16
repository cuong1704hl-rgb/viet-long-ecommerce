import { auth, db } from '@/lib/firebaseAdmin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, role } = body;

    if (!userId || !role) {
      return NextResponse.json(
        { success: false, error: 'Missing userId or role' },
        { status: 400 }
      );
    }

    if (!['buyer', 'seller', 'admin'].includes(role)) {
      return NextResponse.json(
        { success: false, error: 'Invalid role' },
        { status: 400 }
      );
    }

    // Set custom claims
    await auth.setCustomUserClaims(userId, { role });

    // Update Firestore
    await db.collection('users').doc(userId).update({
      role,
      updatedAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: 'Role set successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
