<?php

namespace Feature\Filament\Admin\Resources;

use App\Filament\Admin\Resources\OrderResource;
use Tests\Feature\FeatureTest;

class OrderResourceTest extends FeatureTest
{
    public function test_list(): void
    {
        $user = $this->createAdminUser();
        $this->actingAs($user);

        $response = $this->get(OrderResource::getUrl('index', [], true, 'admin'))->assertSuccessful();

        $response->assertStatus(200);
    }
}