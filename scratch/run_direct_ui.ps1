Add-Type -AssemblyName Microsoft.VisualBasic
Add-Type -AssemblyName System.Windows.Forms
Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;

public class Win32 {
    [DllImport("user32.dll")]
    public static extern bool SetCursorPos(int X, int Y);
    [DllImport("user32.dll")]
    public static extern void mouse_event(uint dwFlags, uint dx, uint dy, uint cButtons, uint dwExtraInfo);
    public const int MOUSEEVENTF_LEFTDOWN = 0x02;
    public const int MOUSEEVENTF_LEFTUP = 0x04;
}
"@

Write-Output "Opening Supabase Dashboard..."
Start-Process "https://supabase.com/dashboard/project/psehhxhozfikmpdvmdgi/sql/new"

Start-Sleep -Seconds 12

Write-Output "Clicking editor..."
[Win32]::SetCursorPos(1000, 400)
Start-Sleep -Milliseconds 200

[Win32]::mouse_event([Win32]::MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0)
[Win32]::mouse_event([Win32]::MOUSEEVENTF_LEFTUP, 0, 0, 0, 0)
Start-Sleep -Milliseconds 500

Write-Output "Selecting and pasting..."
[System.Windows.Forms.SendKeys]::SendWait('^a')
Start-Sleep -Milliseconds 500
[System.Windows.Forms.SendKeys]::SendWait('{BACKSPACE}')
Start-Sleep -Milliseconds 500
[System.Windows.Forms.SendKeys]::SendWait('^v')
Start-Sleep -Seconds 5

Write-Output "Running query..."
[System.Windows.Forms.SendKeys]::SendWait('^{ENTER}')
Start-Sleep -Seconds 5

Write-Output "Success: UI Automation complete"
