import { message } from "@/lib/mqtt";
import { pusher } from "@/lib/pusher";

export default async function SettingsPage() {

  // Server Action
  async function create(formData: FormData) {
    'use server'
    // pusher.trigger('my-channel', 'my-event', { speed: formData.get('Speed') });
    message("CITS5506SMARTFAN/CONTROL", JSON.stringify({ speed: formData.get('Speed') }));
  }


  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Settings</h1>
      </div>
      <div>
        <form action={create}>
          <input type="text" name="Speed" />
          <button type="submit">test</button>
        </form>
      </div>
    </main>
  );
}
