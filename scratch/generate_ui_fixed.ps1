$script = @"
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

# Open the exact SQL Editor page
Start-Process "https://supabase.com/dashboard/project/psehhxhozfikmpdvmdgi/sql/new"

# Wait a generous amount of time for the page to fully load
Start-Sleep -Seconds 12

# Move mouse to the center of the screen assuming a standard 1080p HD monitor (or the 1536x826 viewport)
# The editor is typically in the right pane. Let's aim at X=1000, Y=400 (roughly center of right pane)
[Win32]::SetCursorPos(1000, 400)
Start-Sleep -Milliseconds 200

# Click
[Win32]::mouse_event([Win32]::MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0)
[Win32]::mouse_event([Win32]::MOUSEEVENTF_LEFTUP, 0, 0, 0, 0)
Start-Sleep -Milliseconds 500

# Select all just in case there is default text
[System.Windows.Forms.SendKeys]::SendWait('^a')
Start-Sleep -Milliseconds 500
[System.Windows.Forms.SendKeys]::SendWait('{BACKSPACE}')
Start-Sleep -Milliseconds 500

# Paste from clipboard
[System.Windows.Forms.SendKeys]::SendWait('^v')
Start-Sleep -Seconds 3

# Execute Query
[System.Windows.Forms.SendKeys]::SendWait('^{ENTER}')
Start-Sleep -Seconds 5

Write-Output 'Success: Automation performed on new tab.'
"@

$script | Out-File -FilePath c:\Users\Amin\OneDrive\Desktop\inmobiliaria\scratch\run_ui_fixed.ps1 -Encoding utf8
