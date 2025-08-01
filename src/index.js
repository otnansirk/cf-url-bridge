export default {
  async fetch(request) {
    const url = new URL(request.url);
    const wa_number = url.searchParams.get("n");
    const message = `
    Halo, saya ingin pesan Bright Gas.

    Nama:
    Alamat:
    Produk Pesanan:
    Waktu pengantaran:

    Terima Kasih
    `

    const encodedMessage = encodeURIComponent(message);
    if (!wa_number) {
      return new Response("Missing 'n' parameter", { status: 400 });
    }

    const target = `https://wa.me/${encodeURIComponent(wa_number)}?text=${encodedMessage}`;

    return Response.redirect(target, 302);
  }
}
