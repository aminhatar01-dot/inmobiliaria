import { inviteAgent } from "./apps/web/app/actions/agents";
import { createAdminClient } from "./apps/web/lib/supabase/server";
import * as dotenv from "dotenv";
import path from "path";

// Load environment variables from apps/web/.env.local
dotenv.config({ path: path.join(process.cwd(), "apps/web/.env.local") });

async function testInvitation() {
    const uniqueEmail = `test_agent_${Date.now()}@example.com`;
    console.log(`Testing invitation for: ${uniqueEmail}`);

    try {
        const result = await inviteAgent({
            name: "Test Agent",
            email: uniqueEmail,
            roleId: "", // Default role
            branchId: "" // Default branch
        });
        console.log("Invitation Result:", result);

        if (result.success) {
            console.log("SUCCESS: Invitation sent and registered.");
        }
    } catch (error) {
        console.error("FAILURE: Invitation failed.", error);
    }
}

testInvitation();
